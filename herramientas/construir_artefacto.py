"""
Arma una versión de NAF Aprende en UN SOLO archivo HTML (CSS y JS incrustados)
para publicarla como artefacto de Claude o compartirla como archivo suelto.

Uso:
    python herramientas/construir_artefacto.py [ruta_de_salida.html]

La versión normal (index.html + css/ + js/) sigue siendo la principal; este
script solo la empaqueta. La versión de un solo archivo no usa service worker
ni manifiesto (el visor de artefactos no los permite).
"""
import base64
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = Path(sys.argv[1]) if len(sys.argv) > 1 else RAIZ / "dist" / "naf-aprende.html"


def leer(ruta: str) -> str:
    return (RAIZ / ruta).read_text(encoding="utf-8")


def main() -> None:
    html = leer("index.html")
    cabeza = html.split("<head>", 1)[1].split("</head>", 1)[0]
    cuerpo = html.split("<body>", 1)[1].split("</body>", 1)[0]

    # Hojas de estilo propias, en el orden del index
    estilos = "\n".join(leer(h) for h in re.findall(r'<link rel="stylesheet" href="(css/[^"]+)">', cabeza))
    fuentes = re.findall(r'<link[^>]+fonts\.(?:googleapis|gstatic)[^>]*>', cabeza)

    # Scripts propios, incrustados en su lugar
    def incrustar(m: re.Match) -> str:
        codigo = leer(m.group(1))
        assert "</script" not in codigo.lower(), f"{m.group(1)} contiene </script>"
        return f"<script>/* {m.group(1)} */\n{codigo}</script>"

    cuerpo = re.sub(r'<script src="(js/[^"]+)"></script>', incrustar, cuerpo)
    restantes = re.findall(r'<(?:script|link)[^>]+(?:src|href)="(?!https?:|#)[^"]+"', cuerpo)
    assert not restantes, f"Quedaron recursos sin incrustar: {restantes}"

    salida = "\n".join([
        '<meta charset="utf-8">',  # el visor de artefactos ya la pone; sirve si se abre el archivo suelto
        "<title>NAF Aprende</title>",
        '<meta name="description" content="Aprende lo básico del cumplimiento tributario ante la SUNAT, lección por lección.">',
        *fuentes,
        f"<style>\n{estilos}\n</style>",
        "<script>window.NAF_EMBEBIDO = true;</script>",
        cuerpo.strip(),
        "",
    ])
    # Imágenes propias (logos) incrustadas como data URI, tanto en el HTML como en el JS
    def imagen(m: re.Match) -> str:
        datos = base64.b64encode((RAIZ / "img" / m.group(2)).read_bytes()).decode()
        return f"{m.group(1)}data:image/png;base64,{datos}{m.group(1)}"

    salida = re.sub(r'(["\'])img/([\w\-]+\.png)\1', imagen, salida)
    assert "img/" not in re.sub(r"data:image/png;base64,[^\"']+", "", salida), "Quedaron imágenes sin incrustar"

    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    SALIDA.write_text(salida, encoding="utf-8")
    print(f"Listo: {SALIDA} ({SALIDA.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
