А вот так могут выглядеть мок-данные для кнопки:

``
import { ButtonProps } from './Button';

export const primaryButtonMock: ButtonProps = {
label: 'Сохранить и продолжить',
variant: 'primary',
disabled: false,
};

export const secondaryButtonMock: ButtonProps = {
label: 'Отмена',
variant: 'secondary',
disabled: false,
};

export const disabledButtonMock: ButtonProps = {
label: 'Недоступно',
variant: 'primary',
disabled: true,
};
``