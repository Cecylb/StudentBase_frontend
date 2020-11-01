# Приложение для работы с базой данных

####Данное приложение включает в себя три основных части:
  1. postgres docker для развертывания базы данных
  2. spring backend для работы с базой данных [GitHub](https://github.com/Cecylb/StudentBase_backend)
  3. javascript react веб-приложение для отображения графического интерфейса [GitHub](https://github.com/Cecylb/StudentBase_frontend)

####Скрипт run.sh параллельно запускает все три части. База данных разворачивается через docker-compose up, backend - через java -jar, frontend - через yarn start
####Выход - CTRL + C
####Скрипт clean.sh удаляет созданные контейнеры и "убивает" процесс java на порту 8080
