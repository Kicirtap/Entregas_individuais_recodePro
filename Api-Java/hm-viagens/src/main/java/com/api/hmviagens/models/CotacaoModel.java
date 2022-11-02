package com.api.hmviagens.models;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COTACAO")

public class CotacaoModel implements Serializable {
	
	private static final long serialVersionUID = 1l;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	@Column(nullable = false, unique = true, length = 45)
	private int cliente_cotacao_id;
	@Column
	private String destino_cotacao;
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	public int getCliente_cotacao_id() {
		return cliente_cotacao_id;
	}
	public void setCliente_cotacao_id(int cliente_cotacao_id) {
		this.cliente_cotacao_id = cliente_cotacao_id;
	}
	public String getDestino_cotacao() {
		return destino_cotacao;
	}
	public void setDestino_cotacao(String destino_cotacao) {
		this.destino_cotacao = destino_cotacao;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
