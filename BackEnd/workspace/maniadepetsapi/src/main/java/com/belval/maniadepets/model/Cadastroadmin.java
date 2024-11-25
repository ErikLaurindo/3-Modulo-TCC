package com.belval.maniadepets.model;

public class User {
    private int userId;
    private String userName;
    private String userEmail;
    private String userSenha;
    private boolean isAdmin; // Campo para indicar se o usuário é administrador

    // Getters e setters
    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
}

