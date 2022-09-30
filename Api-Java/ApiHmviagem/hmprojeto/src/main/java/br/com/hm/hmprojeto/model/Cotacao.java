package br.com.hm.hmprojeto.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DESTINO")
public class Cotacao implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String cliente_cotacao_id;
	@Column
	private String destino_cotacao;
	
	public Cotacao() {
		super();
	}

	public Cotacao(long id_destino, String cliente_cotacao, String estado_pais_destino) {
		super();
		this.id = id_destino;
		this.cliente_cotacao_id = cliente_cotacao;
		this.destino_cotacao = estado_pais_destino;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCliente_cotacao_id() {
		return cliente_cotacao_id;
	}

	public void setCliente_cotacao_id(String cliente_cotacao_id) {
		this.cliente_cotacao_id = cliente_cotacao_id;
	}

	public String getDestino_cotacao() {
		return destino_cotacao;
	}

	public void setDestino_cotacao(String destino_cotacao) {
		this.destino_cotacao = destino_cotacao;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cotacao other = (Cotacao) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Destino [id=" + id + ", cliente_cotacao_id=" + cliente_cotacao_id + ", destino_cotacao="
				+ destino_cotacao + "]";
	}

	
	
	
}

	