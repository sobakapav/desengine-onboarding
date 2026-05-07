## Общие ожидания к коду
- делай код читаемым и «учебным»;
- выбирай простые именования;
- избегай лишних абстракций;
- типовые абстракции (стили и т.п.) выноси как минимум в отдельные классы (а если это разрешено — в отдельные файлы);
- закладывай структуру так, чтобы её было удобно улучшать итерациями.

## Требования к синтаксису
 - функция-компонент называется Component;
 - обязательно использовать синтаксис `export default function Component` или его аналоги;
 - если нужно импортировать компонент из `@/components/ui`, то указывать именно этот родительский каталог, не подкаталоги;
 - для стилей используй Tailwind CSS, а не сырой CSS.

## Запрещённые приёмы
 - нельзя задавать абсолютные размеры текста.

## Используемые компоненты
Крайне желательно вместо сырого HTML использовать традиционные компоненты React/Next.js: Fragment, Link, Image, Script, Head, Route, Routes, Outlet, Navigate, Option.

Также разрешены такие shadcn/ui-компоненты: Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Direction, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip. Эти компоненты нужно импортировать из "@/components/ui/".

Используй только существующие компоненты, ни в коем случае не придумывай новые.

Компонент Text запрещён.

Стандартные HTML-теги использовать можно, но только если в списках выше не нашлось ничего подходящего.

Важно: верни результат строго в формате JSON, который описан ниже.
