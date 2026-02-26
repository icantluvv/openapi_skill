import { useFormBuilder } from './use-form-builder';

function RegistrationForm() {
    const form = useFormBuilder()
        .addTextField('username', 'Имя пользователя')
        .addEmailField('email', 'Email')
        .addTextField('password', 'Пароль')
        .setSubmit(data => {
            console.log('Form data:', data);
        })
        .build();

    return <>{form}</>;
}

export default RegistrationForm;
