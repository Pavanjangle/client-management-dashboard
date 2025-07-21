import React from 'react';
import { Card } from '@mantine/core';

const StatCard = ({ icon, label, value, growth }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder className="text-center">
    <div className="mb-2">{icon}</div>
    <h4 className="mb-1">{value}</h4>
    <p className="mb-0 text-muted">{label}</p>
    <small className="text-success">{growth}</small>
  </Card>
);

export default StatCard;
