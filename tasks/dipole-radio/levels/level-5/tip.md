А у чекбокса в мок-файле могут быть, например, вот такие данные:

``
export const uncheckedRadioMock = {
name: 'agreement',
label: 'Я принимаю условия соглашения',
checked: false,
};

export const checkedRadioMock = {
name: 'agreement',
label: 'Я принимаю условия соглашения',
checked: true,
};

export const disabledRadioMock = {
name: 'agreement',
label: 'Заблокированная опция',
checked: false,
disabled: true,
};
``