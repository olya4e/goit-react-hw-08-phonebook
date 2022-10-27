import Container from '@mui/material/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <title>Registration</title>
      <RegisterForm />
    </Container>
  );
};
export default RegisterPage;
