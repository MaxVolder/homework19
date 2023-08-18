// ContactDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ContactDetail() {
  const { username } = useParams();

  return (
    <div>
      <h2>Детальна інформація про контакт {username}</h2>
      {/* Інформація про контакт */}
    </div>
  );
}

export default ContactDetail;
