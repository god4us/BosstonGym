"use client";

import { useEffect, useState } from 'react';

const AdminPanel = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await fetch('/api/admin/members');
                if (!res.ok) {
                    throw new Error('Failed to fetch members');
                }
                const data = await res.json();
                setMembers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr>
                        <th className="text-left py-2 px-4 border-b">ID</th>
                        <th className="text-left py-2 px-4 border-b">Name</th>
                        <th className="text-left py-2 px-4 border-b">Email</th>
                        <th className="text-left py-2 px-4 border-b">Member Active Until</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member: any) => (
                        <tr key={member.id}>
                            <td className="py-2 px-4 border-b">{member.id}</td>
                            <td className="py-2 px-4 border-b">{member.name}</td>
                            <td className="py-2 px-4 border-b">{member.email}</td>
                            <td className="py-2 px-4 border-b">{member.member_active_until || 'Not Active'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
