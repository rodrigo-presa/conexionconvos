@echo off
cd /d "%~dp0"
echo.
echo [1/4] Compilando React...
cd conexionconvos-react
call npm run build
if errorlevel 1 (
  echo ERROR en el build. Revisa los errores de arriba.
  pause
  exit /b 1
)

echo.
echo [2/4] Copiando archivos al root...
cd ..
xcopy /E /Y /I "conexionconvos-react\dist\*" "." >nul
echo Listo.

echo.
echo [3/4] Generando HTML estatico para OG tags...
python -c "import json,os,re; ROOT=os.getcwd(); BASE='https://conexionconvos.com'; arts=json.load(open(os.path.join(ROOT,'conexionconvos-react','src','data','articles.json'),encoding='utf-8')); base=open(os.path.join(ROOT,'index.html'),encoding='utf-8').read(); esc=lambda s:s.replace('\"','&quot;').replace('<','&lt;').replace('>','&gt;'); strip=lambda s:re.sub(r'<[^>]+>','',s or ''); [(__import__('os').makedirs(os.path.join(ROOT,a['section'],a['slug']),exist_ok=True), open(os.path.join(ROOT,a['section'],a['slug'],'index.html'),'w',encoding='utf-8').write(base.replace('<title>Conexión con Vos</title>','<title>'+esc(a.get('title',''))+'</title>').replace('</head>','\n    <meta property=\"og:title\" content=\"'+esc(a.get('title',''))+'\" />\n    <meta property=\"og:image\" content=\"'+BASE+(a.get('himg') or '')+'\" />\n    <meta property=\"og:description\" content=\"'+esc((re.sub(r\"<[^>]+>\",\"\",a.get('sub') or ''))[:200])+'\" />\n    <meta property=\"og:url\" content=\"'+BASE+'/'+a['section']+'/'+a['slug']+'/'+'\" />\n    <meta property=\"og:type\" content=\"article\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  </head>'))) for a in arts if a.get('section') and a.get('slug')]; print('OG generados')"

echo.
echo [4/4] Publicando en Vercel...
call vercel --prod
echo.
echo Listo! El sitio ya esta publicado.
pause
