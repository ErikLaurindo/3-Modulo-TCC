package com.belval.maniadepets.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "Users")
public class User {
	
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "User_id") 
	private Integer userId;
	
	@Column(name = "User_name")
	private String userName;
	
	@Column(name = "User_senha")
	private String userSenha;
	
	@Column(name = "User_Email")
	private String userEmail;
	
	@Column(name = "User_Nasc")
	private String userNasc;

	
	@Column(name = "User_Genero")
	private String userGenero;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Integer userId, String userName, String userSenha, String userEmail, String userNasc, String userGenero) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userSenha = userSenha;
		this.userEmail = userEmail;
		this.userNasc = userNasc;
		this.userGenero = userGenero;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserSenha() {
		return userSenha;
	}

	public void setUserSenha(String userSenha) {
		this.userSenha = userSenha;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getUserNasc() {
		return userNasc;
	}

	public void setUserNasc(String userNasc) {
		this.userNasc = userNasc;
	}

	public String getUserGenero() {
		return userGenero;
	}

	public void setUserGenero(String userGenero) {
		this.userGenero = userGenero;
	}

	@Override
	public int hashCode() {
		return Objects.hash(userEmail, userGenero, userId, userName, userNasc, userSenha);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(userEmail, other.userEmail) && Objects.equals(userGenero, other.userGenero)
				&& Objects.equals(userId, other.userId) && Objects.equals(userName, other.userName)
				&& Objects.equals(userNasc, other.userNasc) && Objects.equals(userSenha, other.userSenha);
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userSenha=" + userSenha + ", userEmail="
				+ userEmail + ", userNasc=" + userNasc + ", userGenero=" + userGenero + "]";
	}

	public boolean isAdmin() {
		// TODO Auto-generated method stub
		return false;
	}
	
	//Método construtor padrão, isto é, sem parâmetros
	
	
}
