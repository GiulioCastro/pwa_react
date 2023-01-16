export enum EnumTabs {
  	tab1,
	tab2,
	tab3,
}

export interface IHomeViewProps {
  currentTab: number;
	handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}