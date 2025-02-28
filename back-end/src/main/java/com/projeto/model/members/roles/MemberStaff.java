package com.projeto.model.members.roles;

import com.projeto.model.members.Member;

public class MemberStaff extends Member {

    public MemberStaff(int id, String name, String email, String photoPath) {
        super(id, name, email);
        setRole("Staff");
    }

}
