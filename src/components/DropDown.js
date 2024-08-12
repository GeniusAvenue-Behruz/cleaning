import Dropdown from 'react-bootstrap/Dropdown';

function CustomDropdown({title, items }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title} <i class="fa-solid fa-caret-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className='flex flex-col items-center'>
        {items.map(item => (
          <Dropdown.Item key={item.id} href={item.href}>
            {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
