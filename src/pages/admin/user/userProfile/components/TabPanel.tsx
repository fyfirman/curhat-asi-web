import * as React from 'react';

export type InfoList = Record<string, string | undefined>;

interface TabPanelProps{
  index: number,
  value: number,
  children: React.ReactNode,
}

const TabPanel = (props: TabPanelProps) => {
  const {
    index, value, children, ...rest
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      {value === index && (
        children
      )}
    </div>
  );
};

export default TabPanel;
