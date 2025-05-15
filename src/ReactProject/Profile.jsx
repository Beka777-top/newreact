import React, { useState } from "react";
import "./Style.css";

export default function NewProfile({ name, tasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">
          Мой профиль {isEditing ? "" : editedName && `– ${editedName}`}
        </h2>
        {isEditing ? (
          <button className="profile-btn save-btn" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button className="profile-btn edit-btn" onClick={handleEditClick}>
            Редактировать профиль
          </button>
        )}
      </div>
      {isEditing && (
        <div className="profile-edit">
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange}
            className="profile-input"
            placeholder="Введите новое имя"
          />
        </div>
      )}
      <h3 className="tasks-title">Мои задачи</h3>
      {tasks.length === 0 && <p className="no-tasks">Вы пока не взяли задачи</p>}
      <div className="tasks-list">
        {tasks.map((task, idx) => (
          <div key={idx} className="task-item">
            <div className="task-title">{task.title}</div>
            <div className="task-details">
              {task.price} – {task.posted}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}