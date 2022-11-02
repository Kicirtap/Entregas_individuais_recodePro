package com.api.hmviagens.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CLIENTE")

public class ClienteModel implements Serializable {
	
	private static final long serialVersionUID = 1l;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@Column(nullable = false, unique = true, length = 45)
	private String nome;
	@Column(nullable = false, unique = true, length = 45)
	private String telefone;
	@Column(nullable = false, unique = true, length = 45)
	private String email;
	@Column(nullable = false)
	private LocalDateTime registroData;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public LocalDateTime getRegistroData() {
		return registroData;
	}
	public void setRegistroData(LocalDateTime registroData) {
		this.registroData = registroData;
	}
	
	
	
	
	
}
