package com.projeto.model.members.roles;

import com.projeto.model.members.Member;

public class MemberProfessor extends Member {

    public MemberProfessor(int id, String name, String email, String photoPath) {
        super(id, name, email);
        setRole("Professor");

    }
}
