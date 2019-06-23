if [ -f '.env' ]; then
    source .env
fi

WEBPACK_BUILD_PATH=${WEBPACK_BUILD_PATH:='dist'}
BUILD_FILE=${BUILD_FILE:='index.html'}
APP_FILE=${APP_FILE:='index.js'}
BUILD_PREFIX=${BUILD_PREFIX:="<script>"}
BUILD_SUFFIX=${BUILD_SUFFIX:="</script></html>"}
GITPAGES_BUILD_PATH=${GITPAGES_BUILD_PATH:='../..'}

#create github pages build
cd $WEBPACK_BUILD_PATH
echo $BUILD_PREFIX >> $BUILD_FILE
cat $APP_FILE >> $BUILD_FILE
echo $BUILD_SUFFIX >> $BUILD_FILE

#remove webpack js build
rm $APP_FILE

#clean gitpages build directory
find $GITPAGES_BUILD_PATH \
    -not -path ${GITPAGES_BUILD_PATH}'/app/*' \
    -not -path ${GITPAGES_BUILD_PATH}'/app' \
    -not -path ${GITPAGES_BUILD_PATH}'/.git/*' \
    -not -path ${GITPAGES_BUILD_PATH}'/.git' \
    -not -path ${GITPAGES_BUILD_PATH}'/README.md' \
    -not -path $GITPAGES_BUILD_PATH \
    -delete

#mode build to gitpages directory
mv ./* $GITPAGES_BUILD_PATH