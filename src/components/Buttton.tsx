

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;

}

const Buttton = ( {children, onClick, color='primary'} : Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Buttton