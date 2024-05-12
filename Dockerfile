#Используем образ node:18.16.0 в качестве базового образа
FROM node:18.16.0

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Компилируем TypeScript код в JavaScript
RUN npm run build

# Определяем команду, которая будет запускаться при запуске контейнера
CMD ["npm", "start"]




