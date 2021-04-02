import React from 'react';

interface InfoProps{
  label: string,
  info?: string
}

const Info = ({ label, info }: InfoProps) => (
  <div>
    <span>{label}</span>
    <span>{info || '-'}</span>
  </div>
);

export default Info;
