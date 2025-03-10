package com.projeto.model.members;

public class Member {

    private int id;
    private String name;
    private String email;
    private String role;
    private String photoPath;

    public Member() {}

    protected Member(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }
    protected void setRole(String role) { this.role = role; }
}