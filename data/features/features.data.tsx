import {
  AccountBalanceOutlined,
  BusinessOutlined,
  MonetizationOnOutlined,
  PeopleAltOutlined,
  ReduceCapacityOutlined,
  SupportOutlined,
} from "@mui/icons-material";

export interface Feature {
  id: number;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const data: Array<Feature> = [
  {
    id: 1,
    title: "Registration of ESOs and labelling of Start-ups",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <ReduceCapacityOutlined />,
  },
  {
    id: 2,
    title: "Start-up Engagement and Support",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <SupportOutlined />,
  },
  {
    id: 3,
    title: "Tax and Fiscal Incentives",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <MonetizationOnOutlined />,
  },
  {
    id: 4,
    title: "Financing and Fund Management",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <AccountBalanceOutlined />,
  },
  {
    id: 5,
    title: "Ecosystem Engagement and Support",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <PeopleAltOutlined />,
  },
  {
    id: 6,
    title: "Collaboration and Linkage with MDAs",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment and boosting the nation's economy.",
    icon: <BusinessOutlined />,
  },
];
