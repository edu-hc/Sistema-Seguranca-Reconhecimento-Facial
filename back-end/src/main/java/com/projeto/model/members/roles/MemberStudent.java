package com.projeto.model.members.roles;

import com.projeto.model.members.Member;

public class MemberStudent extends Member {

    public MemberStudent(int id, String name, String email, String photoPath) {
        super(id, name, email);
        setRole("Student");
    }

}
