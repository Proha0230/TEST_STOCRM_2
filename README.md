src/views/homePage.vue

Изменил код получения 'правильного API' - теперь цикл for...in в функции apiChangeValue проходится по всем элементам обьекта и если ему встречается элемент
у которого тип является обьект и он не пустой (по условию) то для него выполняется рекурсивная функция apiChangeValue.
Функция теперь принимает параметр на вход obj и стала выглядеть красивее, приятнее и читабельнее
