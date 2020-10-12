import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'antd';



function TodoItem(props) {
    const [temp, setTemp] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const { todo, deleteTask } = props;

    const editTodoItem = () => {
        const { todo, editFn } = props;
        editFn(todo.id, temp);
        setIsEdit(false);
    }

    const clickEdit = (props) => {
        setIsEdit(true);
        setTemp(todo.task);
    }

    return (
        <Row style={{ width: "100%" }}>
            <Col span={16}>
                <Row justify="start">
                    {/* {todo.task} */}
                    {isEdit ? <Input value={temp} onChange={(e) => setTemp(e.target.value)} /> : null}
                    {isEdit ? <button onClick={editTodoItem}>Done</button> : null}
                    {!isEdit ? todo.task : null}
                </Row>
            </Col>
            <Col span={4} >
                {!isEdit ? <Button style={{ backgroundColor: "#faad14" }} onClick={clickEdit}>Edit</Button> : null}
            </Col>
            <Col span={4}>
                <Button type="danger" onClick={() => deleteTask(todo.id)}>Delete</Button>
            </Col>
        </Row>
    )
}

export default TodoItem;