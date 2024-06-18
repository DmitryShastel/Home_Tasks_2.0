import React from 'react';
import todo from './todolist2.module.css'

export const Todolist2 = () => {
    return (
        <div className={todo.container}>
            <div className={todo.addItemForm}>
                <input/>
                <button>+</button>
            </div>

            <div className={todo.task}>
                <div>
                    <input type='checkbox'/>
                    <>TaskTaskTaskTaskTask</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>
                <div>
                    <input type='checkbox'/>
                    <>Task</>
                    <button>x</button>
                </div>

            </div>


            <div className={todo.buttons}>
                <button>All</button>
                <button>Complete</button>
                <button>New</button>
            </div>
        </div>
    );
};