import { Typography, Divider, Form, Input, Card, Row, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


function Contribute () {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{paddingBottom:'60px'}}>
            <Title level={2} style={{textAlign:'center'}}><b className="bolded">GPU</b>Map</Title>
            <Divider>Contribute</Divider>
            <Paragraph style={{textAlign:'center'}}>Contribute to our growing database of available GPU locations!</Paragraph>

            <Row style={{justifyContent:'center'}}>
                <Card>
                    <Form {...layout} form={form} onFinish={onFinish} style={{width: '500px'}}>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input a name for the location!' }]}
                            label="Name of Location"
                            tooltip="Ex: Best Buy, Gamestop, Walmart"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="latitude"
                            rules={[{ required: true, message: 'Please input a latitude' }]}
                            label="Latitude"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="longitude"
                            rules={[{ required: true, message: 'Please input a longitude' }]}
                            label="Longitude"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="item_name"
                            rules={[{ required: true, message: 'Please input a graphics card' }]}
                            label="Graphics Card"
                            tooltip="Ex: rtx3080, rx6600, rx6900xt"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="price"
                            rules={[{ required: true, message: 'Please input a price' }]}
                            label="Price"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" style={{marginRight: '8px'}}>
                            Submit
                            </Button>
                            <Button htmlType="button" onClick={onReset} style={{marginRight: '8px'}}>
                            Reset
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </div>
    );
}

export default Contribute;