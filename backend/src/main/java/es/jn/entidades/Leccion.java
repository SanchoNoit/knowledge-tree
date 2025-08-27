package es.jn.entidades;

import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Lecciones")
public class Leccion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	
	private String titulo;
	private String contenido;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Concepto.class, mappedBy = "leccion")
	private Collection<Concepto> conceptos;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Tema")
	private TemaDeEstudio tema;

	public Leccion() {
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public Collection<Concepto> getConceptos() {
		return conceptos;
	}

	public void setConceptos(Collection<Concepto> conceptos) {
		this.conceptos = conceptos;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TemaDeEstudio getTema() {
		return tema;
	}

	public void setTema(TemaDeEstudio tema) {
		this.tema = tema;
	}

}
