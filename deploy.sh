set -e

yarn build
printf "打包成功\n"

cd docs/.vuepress/dist

git init
git checkout -b dist
git add -A
git commit -m 'deploy'
printf "本地提交成功\n"
# git push -f git@github.com:webVueBlog/awesome-css.git dist
git push -f https://github.com/webVueBlog/awesome-css.git dist

printf "dist目录上传成功\n"
