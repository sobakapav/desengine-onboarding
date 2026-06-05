У чекбокса, к примеру, совершенно точно могут быть:
- разные варианты текста;
- разные состояния самого чекбокса.

Поэтому мок-данные могут выглядеть как-то так:

``
import { CheckboxProps } from './Checkbox';

export const uncheckedMock: CheckboxProps = {
label: 'Я согласен с условиями оферты',
checked: false,
};

export const checkedMock: CheckboxProps = {
label: 'Получать уведомления на email',
checked: true,
};
``
