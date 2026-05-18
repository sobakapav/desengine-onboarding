Здесь нам нужно поле ввода, принимающее исключительно числа.

Конечно, в библиотеке [ui.shadcn](https://ui.shadcn.com/) есть [поле ввода](https://ui.shadcn.com/docs/components/radix/input).

Но аттрибут type={number} придется добавить самостоятельно. Ну то есть самостоятельно убедить LLM сделать это.

PS. Убедитесь, что в коде есть `import { Input } from "@/components/ui/input"`.

PPS. В других библиотеках может быть другой набор компонентов и параметров. Например, в библиотеке [Material UI](https://mui.com/material-ui) предусмотрен готовый компонент [Number Field](https://mui.com/material-ui/react-number-field/).