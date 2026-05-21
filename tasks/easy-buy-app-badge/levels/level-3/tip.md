Загляние в файл `style.ts`.

(Вы можете его увидеть не только тут, но и на своем компьютере, в папке `/user` этого проекта. Как и остальные связанные с задачами результаты.)

Вы увидите там что-то похожее на: 

`export const containerClass = 'flex items-center'; export const itemClass = 'h-4 w-4 rounded-full..'; export const labelClass = 'text-sm font-medium leading-none..`

Только, скорее всего, длиннее,  мы сократил.

Что там такое экспортируется-то? Мы уже сказали вам, что стили. Но вообще-то мы слегка приврали для понятности:( 

Это не стили, это классы.

[Tailwind CSS](https://tailwindcss.com/) — это такая система заранее предсозданных классов с понятными названиями, которым приписаны какие-то CSS-стили.

Когда браузер видит классы [`flex`](https://tailwindcss.com/docs/display) и [`items-center`](https://tailwindcss.com/docs/align-items), он читает
`
display: flex;
align-items: center;
`
Когда видит классы [`w-4`](https://tailwindcss.com/docs/width) и [`h-4`](https://tailwindcss.com/docs/height) - знает, какой ширины и высоты должен быть тег или компонент, которому приписаны эти классы.

Когда видит класс [`rounded-full`](https://tailwindcss.com/docs/border-radius) — понимает, что уголки нужно скруглять до полной круглости. И так далее.

