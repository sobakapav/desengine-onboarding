Кроме внешнего вида, у кнопки есть поведение. 

Она должна себя как-то вести при наведении и нажатии. Как? [Цвет](https://tailwindcss.com/docs/background-color), [тень](https://tailwindcss.com/docs/box-shadow), [изменение курсора](https://tailwindcss.com/docs/cursor)?

Чтобы описать, как элемент меняется в каких-то условиях (например, по ховеру или если он первый в ряду однотипных), используют [псевдоклассы](https://tailwindcss.com/docs/hover-focus-and-other-states).

В CSS псевдоклассы записываются вот так `:hover`, `:focus`, `:first-child` (добавляются после названия класса в таблице стилей).

А в [Tailwind CSS](https://tailwindcss.com) вот так: `hover:`, `focus:` — перед названием класса.

Например, `bg-teal-600 hover:bg-teal-600` для браузера означает «Цвет фона этого элемента — #009689. При наведении он меняется на #005F5A».
