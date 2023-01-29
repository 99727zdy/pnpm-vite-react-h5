// pages/Home/index.tsx
import React, { useState } from 'react';
import { Popup, Selector, Space, Button, Avatar } from 'antd-mobile';
import { Collapse } from 'antd-mobile';
import { FloatingBubble, Toast, Checkbox } from 'antd-mobile';
import { MessageFill } from 'antd-mobile-icons';
import { Card } from 'antd-mobile';
import styles from './index.less';
import { AntOutline, RightOutline } from 'antd-mobile-icons';
import { TextArea } from 'antd-mobile';

import { FC, PropsWithChildren, useRef } from 'react';
import { List } from 'antd-mobile';
// import { CheckboxRef } from '../checkbox';
import { Link } from 'react-router-dom';
import moment from 'moment';
const options = [
  {
    label: '进行中',
    value: '1',
  },
  {
    label: '由我处理',
    value: '2',
  },
  {
    label: '我分配的',
    value: '3',
  },
  {
    label: '我关注的',
    value: '4',
  },
  {
    label: '已完成',
    value: '5',
  },
];

const mockContent = <div style={{ padding: 20 }}>rjwnerkjfnewknj</div>;

const mockContentWithCloseIcon = (
  <div style={{ padding: '40px 20px 20px' }}>
    f ndms ndjnfervne;kjent;vbonkroe;itbjvmotr;ijvmf
  </div>
);

const RadioMode = () => {
  const [value, setValue] = useState('1');
  return (
    <Selector
      options={options}
      value={[value]}
      onChange={(v: string | any[]) => {
        if (v.length) {
          setValue(v[0]);
        }
      }}
    />
  );
};

const CollapsePanel = () => {
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel key="1" title="已逾期">
          <TodoItem />
          <TodoItem />
        </Collapse.Panel>
        <Collapse.Panel key="2" title="今天">
          <TodoItem />
        </Collapse.Panel>
        <Collapse.Panel key="3" title="未来7天">
          <TodoItem />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const CirclePopup = () => {
  const [visible5, setVisible5] = useState(false);

  return (
    <>
      <Button
        color="primary"
        fill="solid"
        shape="rounded"
        onClick={() => {
          setVisible5(true);
        }}
      >
        <span style={{ fontSize: 20 }}>+</span>
      </Button>
      <Popup
        visible={visible5}
        onMaskClick={() => {
          setVisible5(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '40vh',
          backgroundColor: 'green',
          padding: 5,
        }}
      >
        <MyTextArea />
      </Popup>
    </>
  );
};

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
];

const TodoItem = () => {
  const onClick = () => {
    Toast.show('点击了卡片');
  };
  return (
    <Card onClick={onClick}>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={() => {
          console.log('点击了');
        }}
      >
        <Checkbox></Checkbox>
        <Link to="about">
          <div style={{ marginLeft: 14, color: '#333' }}>
            <span
              style={{ textAlign: 'center', fontSize: 14 }}
              onClick={() => {}}
            >
              吃饭吃饭吃饭
            </span>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 3 }}
            >
              <Avatar
                src={demoAvatarImages[1]}
                style={{ '--border-radius': '10px', '--size': '20px' }}
              />
              <span style={{ marginLeft: 14, fontSize: 12 }}>
                {moment().format('MM')}月{moment().format('DD')}日
                {moment().format('h:mm')}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Card>
  );
};

const AddTodo = () => {
  const onClick = () => {
    Toast.show('你点击了气泡');
  };
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <FloatingBubble
        style={{
          '--initial-position-bottom': '24px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
        onClick={onClick}
      >
        <CirclePopup />
        {/* <MessageFill fontSize={32} /> */}
      </FloatingBubble>
    </div>
  );
};

const MyTextArea = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextArea
        placeholder="请输入内容"
        value={value}
        autoSize={{ minRows: 3, maxRows: 5 }}
        showCount
        maxLength={30}
        onChange={(val: React.SetStateAction<string>) => {
          setValue(val);
        }}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <Space></Space>
      <RadioMode />
      <Space></Space>
      <CollapsePanel />
      <AddTodo />
    </>
  );
};

const items = ['Apple', 'Orange', 'Banana'];

// const ListItemWithCheckbox: FC<
//   PropsWithChildren<{
//     item: string;
//   }>
// > = (props) => {
//   const checkboxRef = useRef<CheckboxRef>(null);
//   return (
//     <List.Item
//       prefix={
//         <div onClick={(e) => e.stopPropagation()}>
//           <Checkbox value={props.item} ref={checkboxRef} />
//         </div>
//       }
//       onClick={() => {
//         checkboxRef.current?.toggle();
//       }}
//       arrow={false}
//     >
//       {props.item}
//     </List.Item>
//   );
// };

// const ToDoList = () => {
//   return (
//     <>
//       <Checkbox.Group>
//         <List>
//           {items.map((item) => (
//             <ListItemWithCheckbox key={item} item={item} />
//           ))}
//         </List>
//       </Checkbox.Group>
//     </>
//   );
// };
