import Button from '@components/LinkButton';

interface ActionButtonProps {
  to: string;
  label: string
}

const ActionButton = ({ to, label }: ActionButtonProps) => {
  return (
    <Button
      to={to}
      variant="contained"
      color="secondary"
      size="small"
      disableElevation
    >
      {label}
    </Button>
  );
};

export default ActionButton;
