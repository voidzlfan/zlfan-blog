import {
  HomeOutlined,
  EditOutlined,
  CameraOutlined,
  CommentOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const menuList = [
  {
    key: "/home", // 对应的path
    title: "首页", // 菜单标题名称
    icon: <HomeOutlined />, // 图标名称
  },
  {
    key: "/article",
    title: "文章",
    icon: <EditOutlined />,
    children: [
    ],
  },
  {
    key: "/live",
    title: "生活",
    icon: <CameraOutlined />,
  },
  {
    key: "/leaveword",
    title: "留言",
    icon: <CommentOutlined />,
  },

  {
    key: "/about",
    title: "关于",
    icon: <QuestionCircleOutlined />,
  },
];

export default menuList;
