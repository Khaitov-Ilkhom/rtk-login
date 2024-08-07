import {Button, Checkbox, Form, Input, Typography} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useSingUpMutation} from "../../../redux/api/user-api.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {singUpSlice} from "../../../redux/slices/AuthSlice.jsx";


const {Title, Text} = Typography

const Register = () => {
  const [singUp, {data, isSuccess, isLoading}] = useSingUpMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    singUp(values)
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(singUpSlice(data?.payload.token))
      navigate("/dashboard")
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
      >
        <Title className="text-center block pb-2">Register</Title>

        <Form.Item
            label="Firstname"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 24,
            }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
              span: 24,
            }}
        >
          <Button loading={isLoading} disabled={isLoading} className="w-full" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Text className="text-center block"> Already have an account? <Link to="/auth">Log In</Link></Text>
      </Form>
  )
}
export default Register
