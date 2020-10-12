import React, { useState } from 'react'
import { Button, Col, Divider, Input, Row, Typography, List } from 'antd';
import _ from 'lodash';
import TodoItem from './TodoItem'

function TodoList(props) {

    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState("");

    // useEffect(() => {
    //     setTodoList([
    //         {
    //             id: 1,
    //             task: "Do Homework"
    //         },
    //         {
    //             id: 2,
    //             task: "play Football"
    //         },
    //         {
    //             id: 3,
    //             task: "Read book"
    //         },
    //         {
    //             id: 4,
    //             task: "play game"
    //         },
    //     ]);
    // }, [])

    const { Text } = Typography;

    const addTodoItem = () => {
        const newTask = inputField;
        if (newTask === "") return;
        const newTodoList = [...todoList];
        newTodoList.push({
            id: _.uniqueId(),
            task: inputField,
        });
        setTodoList(newTodoList);
        setInputField("");
    }

    const deleteTodoItem = (id) => {
        // const newTodoList = todoList.filter(todo => todo.id !== id);
        // setTodoList(newTodoList);
        const newTodoList = [...todoList];
        const targetIndex = newTodoList.findIndex(todo => todo.id === id);
        newTodoList.splice(targetIndex, 1);
        setTodoList(newTodoList);
    }

    const editTask = (targetId, newTask) => {
        const newTodoList = [...todoList];
        const targetIdx = newTodoList.findIndex(todo => todo.id === targetId);
        newTodoList[targetIdx].task = newTask
        setTodoList(newTodoList);
    }


    return (
        <Row justify="center">
            <Col>
                <Row >
                    <Text type="warning">
                        กรุณาใส่ Todo ที่ต้องการเพิ่ม
                    </Text>
                </Row>
                <Row justify="center" >
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: "100%" }} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        style={{ width: "450px" }}
                        header={<div>Todo List Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={(item) =>
                            <List.Item>
                                <TodoItem todo={item} editFn={editTask} deleteTask={deleteTodoItem} />
                            </List.Item>
                        }
                    />
                </Row>
            </Col>
        </Row>
    )

}

export default TodoList

