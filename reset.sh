rm -Rf ./packages/**/node_modules
rm -Rf ./packages/**/dist
rm ./packages/**/tsconfig.tsbuildinfo
rm -Rf ./node_modules

yarn
#yarn build
