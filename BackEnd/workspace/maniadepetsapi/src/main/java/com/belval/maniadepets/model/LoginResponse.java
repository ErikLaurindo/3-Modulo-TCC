package com.belval.maniadepets.model;

public class LoginResponse {
    private int id;
    private String userName;
    private boolean isAdmin;

    // Construtor
    public LoginResponse(int id, String userName, boolean isAdmin) {
        this.id = id;
        this.userName = userName;
        this.isAdmin = isAdmin;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public boolean isAdmin() {
        return isAdmin;
    }
}
