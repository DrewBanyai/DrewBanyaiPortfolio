import os

#  Read in the index.html file to to a variable
file = None
with open("./out/index.html", "r") as f:
     file = f.read()
     f.close()

#  Rename the _next filder and change all references to it as well
file = file.replace('/_next', './next')
os.rename('./out/_next/', './out/next/')


#  Rename the _app file and change all references to it as well
os.rename('./out/next/static/chunks/pages/_app-413e47489d0189a1538b.js', './out/next/static/chunks/pages/app-413e47489d0189a1538b.js')
file = file.replace('next/static/chunks/pages/_app-413e47489d0189a1538b.js', 'next/static/chunks/pages/app-413e47489d0189a1538b.js')

#  Write the altered data back to the index.html file
with open("./out/index.html", 'w') as f:
    f.write(file)
    f.close()

    