FROM nginx
MAINTAINER guokeke<1040707795@qq.com>

COPY dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'