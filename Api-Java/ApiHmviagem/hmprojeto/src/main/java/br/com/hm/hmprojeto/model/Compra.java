package br.com.hm.hmprojeto.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Compra")
public class Compra implements Serializable{
    
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private long cliente_id;
	@Column
	private long local_partida;
	@Column
	private long destino;
	
	public Compra() {
		super();
	}

	
	public Compra(int id, long cliente_id, long local_partida, long destino ) {
		super();
		this.id= id;
		this.cliente_id = cliente_id;
		this.local_partida = local_partida;
		this.destino = destino;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public long getCliente_id() {
		return cliente_id;
	}


	public void setCliente_id(long cliente_id) {
		this.cliente_id = cliente_id;
	}


	public long getLocal_partida() {
		return local_partida;
	}


	public void setLocal_partida(long local_partida) {
		this.local_partida = local_partida;
	}


	public long getDestino() {
		return destino;
	}


	public void setDestino(long destino) {
		this.destino = destino;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Compra other = (Compra) obj;
		return id == other.id;
	}

	
	
	
	

}

