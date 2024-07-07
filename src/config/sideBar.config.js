import {
  Photo,
  StarOutlineOutlined,
  SendOutlined,
  InsertDriveFileOutlined,
  DeleteOutlined,
  MailOutlined,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutlineOutlined,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlined,
  },
  {
    name: "all mail",
    title: "All Mail",
    icon: MailOutlined,
  },
];
