import * as React from 'react';
import Info from './Info';

export type InfoList = Record<string, string | undefined>;

interface TabPanelProps{
  index: number,
  value: number,
  infoList: InfoList,
}

const TabPanel = (props: TabPanelProps) => {
  const {
    index, value, infoList, ...rest
  } = props;

  const renderInfoList = () => Object.keys(infoList).map((key, i) => (
    <Info key={i} label={key} info={infoList[key]} />
  ));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      {value === index && (
        renderInfoList()
      )}
    </div>
  );
};

export default TabPanel;
