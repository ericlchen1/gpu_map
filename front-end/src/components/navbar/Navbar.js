import "antd/dist/antd.css";
import "./Navbar.css";
import { Affix, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  PlusOutlined
} from "@ant-design/icons";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function Navbar () {
    return (
        <Affix>
            <Menu mode="horizontal">
                <Menu.Item key="logo" className="logo">
                    <Link className="link" to="/">
                        <b className="bolded">GPU</b>Map
                    </Link>
                </Menu.Item>
                <Menu.Item key="home" icon={<HomeOutlined />} className="customclass">
                    <Link className="link" to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="search" icon={<SearchOutlined className="icon" />}>
                    <Link className="link" to="/search">
                        Find GPUs
                    </Link>
                </Menu.Item>
                <Menu.Item key="add" icon={<PlusOutlined className="icon" />}>
                    <Link className="link" to="/contribute">
                        Contribute
                    </Link>
                </Menu.Item>
                <Menu.Item key="about" icon={<UserOutlined className="icon" />}>
                    <Link className="link" to="/about">
                        About Us
                    </Link>
                </Menu.Item>
                <SubMenu style={{ marginLeft: 'auto' }} title={<span>Profile</span>} icon={<UserOutlined className="icon"/>}>
                    <Menu.Item key="login">
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link className="link" to="/profile">
                            Profile
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="logout">Log Out</Menu.Item>
                </SubMenu>
            </Menu>
        </Affix>
    );
}

export default Navbar;